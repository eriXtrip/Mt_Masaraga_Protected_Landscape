import * as React from "react"
import { cn } from "@/lib/utils"
import { DayPicker, getDefaultClassNames } from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon, CheckCircle2 } from "lucide-react"

const SlotContext = React.createContext({ provided: false, map: {}, allowUnscheduled: false, disableScheduled: false })

const DAY_CELL = "h-16 @xl:h-20 @3xl:h-28"
const DAY_CELL_FRAME = "relative border-t border-l border-outline-variant/10 transition-colors group"
const DAY_BADGE = "absolute top-1.5 left-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-medium @xl:top-2 @xl:left-2 @xl:h-7 @xl:w-7 @xl:text-sm"
const SLOT_BOX = "absolute bottom-1.5 left-1.5 right-1.5 @xl:bottom-2 @xl:left-2 @xl:right-2"
const PILL = "truncate rounded px-1 py-0.5 text-center text-[9px] font-medium leading-tight @xl:px-2 @xl:py-1 @xl:text-[10px]"

const TONE_OPEN = "bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary-container"
const TONE_LIMITED = "bg-[#fef08a]/30 text-[#854d0e] transition-colors group-hover:bg-[#fef08a]"
const TONE_FULL = "bg-surface-variant/60 text-on-surface-variant"
const TONE_NONE = "bg-surface-variant/40 text-on-surface-variant"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  locale,
  disabled,
  slots,
  allowUnscheduled = false,
  disableScheduled = false,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  const slotContext = React.useMemo(
    () => ({ provided: slots !== undefined, map: slots || {}, allowUnscheduled, disableScheduled }),
    [slots, allowUnscheduled, disableScheduled]
  )

  const today = React.useMemo(() => new Date(), [])
  const startOfCurrentMonth = React.useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
    [today]
  )

  const tomorrow = React.useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    [today]
  )

  return (
    <div className="@container relative w-full">
      <SlotContext.Provider value={slotContext}>
        <DayPicker
          startMonth={startOfCurrentMonth}
          disabled={disabled ?? { before: tomorrow }}
          showOutsideDays={showOutsideDays}
          className={cn("group/calendar relative w-full", className)}
          captionLayout={captionLayout}
          locale={locale}
          formatters={{
            weekday: (day) =>
              day
                .toLocaleDateString(locale?.code || "en-US", {
                  weekday: "short",
                })
                .slice(0, 2),
          }}
          classNames={{
            root: cn("w-full"),
            months: cn("flex w-full flex-col gap-y-3"),

            // Make navigation position relative to the month
            month: cn("relative flex w-full flex-col"),

            // Navigation stays on the right side
            nav: cn(
              "absolute right-0 top-0 z-10 flex items-center gap-1.5"
            ),

            button_previous: cn(
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-outline-variant/50 text-on-surface-variant transition-colors hover:bg-surface-variant disabled:pointer-events-none disabled:opacity-30"
            ),

            button_next: cn(
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-outline-variant/50 text-on-surface-variant transition-colors hover:bg-surface-variant disabled:pointer-events-none disabled:opacity-30"
            ),

            // Leave enough room for the navigation
            month_caption: cn(
              "mb-2 w-full min-h-10"
            ),

            caption_label: cn(
              "truncate text-base font-bold text-on-surface @xl:text-xl @3xl:text-2xl"
            ),

            month_grid: cn(
              "mt-1 w-full table-fixed border-collapse overflow-hidden rounded-lg border border-outline-variant/20 bg-outline-variant/20 shadow-sm",
              defaultClassNames.month_grid
            ),

            weekdays: cn(
              "bg-surface border-b border-outline-variant/20"
            ),

            weekday: cn(
              "px-1 py-2 text-center text-[11px] font-medium text-on-surface-variant @xl:p-3 @xl:text-sm"
            ),

            week: cn("w-full"),

            day: cn(
              "m-0 p-[0.5px] focus-within:relative focus-within:z-20"
            ),

            outside: cn("opacity-50"),
            hidden: cn("invisible"),

            ...classNames,
          }}

          components={{
            MonthCaption: ({
              className,
              calendarMonth,
              displayIndex,
            }) => (
              <div
                className={cn(
                  "flex w-full items-center gap-3 pr-24",
                  className
                )}
              >
                {/* Month Name */}
                <div className="shrink-0 truncate text-xl font-bold text-on-surface @xl:text-2xl @3xl:text-2xl">
                  {calendarMonth.date.toLocaleString(
                    locale?.code || "en-US",
                    {
                      month: "long",
                      year: "numeric",
                    }
                  )}

                  {/* Legend */}
                  <div className="flex pt-2 mt-2 min-w-0 sm:flex-row flex-wrap flex-col sm:items-center items-start gap-x-3 gap-y-1.5 @xl:gap-x-4 border-t">

                    {/* Available */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 shrink-0 rounded-full border border-primary bg-primary/10 @xl:h-4 @xl:w-4" />

                      <span className="whitespace-nowrap text-[11px] text-on-surface-variant @xl:text-xs">
                        Available
                      </span>
                    </div>

                    {/* Limited Space */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 shrink-0 rounded-full border border-[#ca8a04] bg-[#fef08a] @xl:h-4 @xl:w-4" />

                      <span className="whitespace-nowrap text-[11px] text-on-surface-variant @xl:text-xs">
                        Limited Space
                      </span>
                    </div>

                    {/* Fully Booked / Closed */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-3 shrink-0 rounded-full border border-outline-variant/50 bg-surface-variant @xl:h-4 @xl:w-4" />

                      <span className="whitespace-nowrap text-[11px] text-on-surface-variant @xl:text-xs">
                        Fully Booked / Closed
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            ),

            Chevron: ({ className, orientation, ...props }) => {
              if (orientation === "left") {
                return (
                  <ChevronLeftIcon
                    className="h-5 w-5"
                    {...props}
                  />
                )
              }

              if (orientation === "right") {
                return (
                  <ChevronRightIcon
                    className="h-5 w-5"
                    {...props}
                  />
                )
              }

              return null
            },

            DayButton: (props) => (
              <CalendarDayButton {...props} />
            ),
          }}

          {...props}
        />
      </SlotContext.Provider>
    </div>
  )
}

function CalendarDayButton({ day, modifiers, className, "aria-label": ariaLabel, ...props }) {
  const isSelected = modifiers.selected;
  const isOutside = modifiers.outside;
  const isToday = modifiers.today;
  const isDisabled = modifiers.disabled;

  const dateKey = day.date.toLocaleDateString('en-CA');

  const slotContext = React.useContext(SlotContext);
  const { provided: hasSlotInfo, map: slotMap, allowUnscheduled, disableScheduled } = slotContext;

  const hasSchedule = hasSlotInfo && slotMap[dateKey] !== undefined;
  const slotCount = hasSchedule ? slotMap[dateKey] : null;

  const dayNum = day.date.getDate();
  const isLimited = hasSchedule && slotCount > 0 && slotCount <= 3;
  const isFullyBooked = hasSchedule && slotCount === 0;
  const isUnscheduled = hasSlotInfo && !hasSchedule;
  const isScheduledBlocked = hasSchedule && (isFullyBooked || disableScheduled);
  const isBlocked = isOutside || isDisabled || isScheduledBlocked || (isUnscheduled && !allowUnscheduled);

  const availabilityLabel = !isOutside && !isDisabled
    ? isFullyBooked
      ? "Fully booked"
      : isUnscheduled
        ? "No schedule"
        : isLimited
          ? `${slotCount} slots left`
          : `${slotCount} slots open`
    : null;

  let dayWrapperClass = cn(DAY_CELL, DAY_CELL_FRAME, "bg-surface-container-lowest");
  if (isSelected) {
    dayWrapperClass = cn(DAY_CELL, DAY_CELL_FRAME, "z-10 cursor-pointer border-primary/30 bg-primary/5 ring-2 ring-inset ring-primary");
  } else if (isBlocked) {
    dayWrapperClass = cn(DAY_CELL, DAY_CELL_FRAME, "cursor-not-allowed border-outline-variant/30 bg-surface-variant/40");
  } else {
    dayWrapperClass = cn(dayWrapperClass, "cursor-pointer hover:bg-surface-container");
  }

  return (
    <button
      {...props}
      aria-label={availabilityLabel ? `${ariaLabel}, ${availabilityLabel}` : ariaLabel}
      className={cn("h-full w-full appearance-none text-left focus:ring-2 focus:ring-inset focus:ring-primary", className)}
      type="button"
      disabled={isBlocked}
    >
      <div className={dayWrapperClass}>
        <div className={cn(
          DAY_BADGE,
          isSelected ? "bg-primary text-on-primary font-bold shadow-sm" :
            isToday ? "border-2 border-outline-variant text-on-surface-variant font-bold" :
              isDisabled ? "text-on-surface-variant/80" :
                "text-on-surface"
        )}>
          {dayNum}
        </div>

        {(!isOutside && !isDisabled && hasSlotInfo) && (
          <div className={SLOT_BOX}>
            {isSelected ? (
              <div className="flex items-center justify-center gap-1 @xl:justify-between">
                <CheckCircle2 className="text-primary h-4 w-4 shrink-0 fill-primary/10" />
                <span className="hidden truncate rounded bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary @xl:block">Selected</span>
              </div>
            ) : isUnscheduled ? (
              allowUnscheduled ? null : (
                <div className={cn(PILL, TONE_NONE, "hidden @xl:block")}>No schedule</div>
              )
            ) : isFullyBooked ? (
              <div className={cn(PILL, TONE_FULL)}>
                <span className="@xl:hidden">0</span>
                <span className="hidden @xl:inline">Fully Booked</span>
              </div>
            ) : isLimited ? (
              <div className={cn(PILL, TONE_LIMITED)}>
                <span className="@xl:hidden">{slotCount}</span>
                <span className="hidden @xl:inline">{slotCount} slots left</span>
              </div>
            ) : (
              <div className={cn(PILL, TONE_OPEN)}>
                <span className="@xl:hidden">{slotCount}</span>
                <span className="hidden @xl:inline">{slotCount} slots open</span>
              </div>
            )}
          </div>
        )}

        {isDisabled && !isOutside && (
          <div className={SLOT_BOX}>
            <div className={cn(PILL, TONE_NONE, "hidden @xl:block")}>
              {isToday ? "Today closed" : "Unavailable"}
            </div>
          </div>
        )}
      </div>
    </button>
  )
}

export { Calendar, CalendarDayButton }