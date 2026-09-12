import * as React from "react"
import { cn } from "@/lib/utils"
import { DayPicker, getDefaultClassNames } from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon, CheckCircle2 } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  locale,
  fromMonth,
  disabled,
  slots,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  // Get current date and start of current month
  const today = React.useMemo(() => new Date(), [])
  const startOfCurrentMonth = React.useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
    [today]
  )

  // Calculate start of tomorrow to disable today and all previous days
  const tomorrow = React.useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    [today]
  )

  return (
    <div className="w-full relative">
      <DayPicker
        // 1. Prevents navigating back to previous months
        fromMonth={fromMonth ?? startOfCurrentMonth}
        startMonth={fromMonth ?? startOfCurrentMonth} // For react-day-picker v9 compatibility
        // 2. Disables selecting past dates AND today (anything before tomorrow)
        disabled={disabled ?? { before: tomorrow }}
        showOutsideDays={showOutsideDays}
        className={cn("w-full group/calendar relative", className)}
        captionLayout={captionLayout}
        locale={locale}
        classNames={{
          root: cn("w-full"),
          months: cn("w-full flex flex-col"),
          month: cn("w-full flex flex-col"),
          nav: cn("flex items-center gap-2 absolute right-0 top-0 z-10"),
          button_previous: cn("p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors border border-outline-variant/50 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"),
          button_next: cn("p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors border border-outline-variant/50 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"),
          month_caption: cn("flex items-center justify-between mb-8 relative h-10"),
          caption_label: cn("font-headline-md text-xl font-bold text-on-surface"),

          month_grid: cn("w-full border-collapse border border-outline-variant/20 rounded-lg overflow-hidden bg-outline-variant/20 shadow-sm mt-4", defaultClassNames.month_grid),
          weekdays: cn("bg-surface border-b border-outline-variant/20"),
          weekday: cn("p-3 text-center font-label-md text-sm text-on-surface-variant font-medium"),
          week: cn("w-full"),
          day: cn("p-[0.5px] m-0 relative focus-within:relative focus-within:z-20"),

          outside: cn("opacity-50"),
          hidden: cn("invisible"),
          ...classNames,
        }}
        components={{
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") return <ChevronLeftIcon className="h-5 w-5" {...props} />
            if (orientation === "right") return <ChevronRightIcon className="h-5 w-5" {...props} />
            return null
          },
          MonthCaption: ({ calendarMonth }) => (
            <div className="w-full flex flex-col pt-1">
              <div className="font-headline-md text-2xl font-bold text-on-surface mb-3">
                {calendarMonth.date.toLocaleString(locale?.code || 'en-US', { month: 'long', year: 'numeric' })}
              </div>
              {/* Legend */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-outline-variant/30 w-full">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary/10 border border-primary flex items-center justify-center"></div>
                  <span className="font-label-md text-label-md text-on-surface-variant">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#fef08a] border border-[#ca8a04]"></div>
                  <span className="font-label-md text-label-md text-on-surface-variant">Limited Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-surface-variant border border-outline-variant/50"></div>
                  <span className="font-label-md text-label-md text-on-surface-variant">Fully Booked / Closed</span>
                </div>
              </div>
            </div>
          ),
          DayButton: (props) => <CalendarDayButton {...props} />,
        }}
        {...props}
      />
    </div>
  )
}

function CalendarDayButton({ day, modifiers, className, ...props }) {
  const isSelected = modifiers.selected;
  const isOutside = modifiers.outside;
  const isToday = modifiers.today;
  const isDisabled = modifiers.disabled;

  // Format the current date to YYYY-MM-DD for looking up in the const
  const dateKey = day.date.toLocaleDateString('en-CA'); // 'en-CA' outputs YYYY-MM-DD natively

  // Lookup slots from the const. Default to a high number (e.g. 20) if not explicitly defined in MOCK_SLOTS_DATA
  const slots = typeof MOCK_SLOTS_DATA !== "undefined" && MOCK_SLOTS_DATA[dateKey] !== undefined ? MOCK_SLOTS_DATA[dateKey] : 20;

  const dayNum = day.date.getDate();
  const isLimited = slots > 0 && slots <= 3;
  const isFullyBooked = slots === 0;

  let dayWrapperClass = "bg-surface-container-lowest p-2 h-28 border-t border-l border-outline-variant/10 relative transition-colors group ";

  if (isSelected) {
    dayWrapperClass = "bg-primary/5 p-2 h-28 border-t border-l border-primary/30 relative cursor-pointer ring-inset ring-2 ring-primary transition-all z-10 ";
  } else if (isOutside || isDisabled || isFullyBooked) {
    dayWrapperClass += "opacity-50 bg-surface-variant/30 cursor-not-allowed ";
  } else {
    dayWrapperClass += "hover:bg-surface-container cursor-pointer ";
  }

  return (
    <button
      className={cn("w-full h-full text-left outline-none block appearance-none", className)}
      type="button"
      disabled={isFullyBooked || isDisabled || isOutside}
      {...props}
    >
      <div className={dayWrapperClass}>
        {/* Day Number Badge */}
        <div className={cn(
          "absolute top-2 left-2 w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium",
          isSelected ? "bg-primary text-on-primary font-bold shadow-sm" :
            isToday ? "border-2 border-outline-variant text-on-surface-variant font-bold" :
              isDisabled ? "text-on-surface-variant/40" :
                "text-on-surface"
        )}>
          {dayNum}
        </div>

        {/* Availability Badge */}
        {(!isOutside && !isDisabled) && (
          <div className="absolute bottom-2 left-2 right-2">
            {isSelected ? (
              <div className="flex justify-between items-end">
                <CheckCircle2 className="text-primary h-4 w-4 fill-primary/10" />
                <div className="text-primary text-[10px] py-1 px-2 font-bold bg-primary/10 rounded">
                  Selected
                </div>
              </div>
            ) : isFullyBooked ? (
              <div className="text-on-surface-variant text-[10px] py-1 px-2 text-center bg-surface-variant/50 rounded">
                Fully Booked
              </div>
            ) : isLimited ? (
              <div className="bg-[#fef08a]/30 text-[#854d0e] text-[10px] py-1 px-2 rounded text-center truncate group-hover:bg-[#fef08a] transition-colors">
                {slots} slots left
              </div>
            ) : (
              <div className="bg-primary/10 text-primary text-[10px] py-1 px-2 rounded text-center truncate group-hover:bg-primary group-hover:text-on-primary transition-colors">
                {slots} slots open
              </div>
            )}
          </div>
        )}

        {/* Past/Disabled state indicator */}
        {isDisabled && !isOutside && (
          <div className="absolute bottom-2 left-2 right-2">
            <div className="text-on-surface-variant/50 text-[10px] py-1 px-2 text-center bg-surface-variant/20 rounded">
              {isToday ? "Same Day Booking Closed" : "Unavailable"}
            </div>
          </div>
        )}
      </div>
    </button>
  )
}

export { Calendar, CalendarDayButton }