# Generic Prompt: Create Admin Page with Components

## Reference Files to Follow
- **Page structure/animation**: `@resources/js/pages/admin/AdminDashboard.jsx` (useInView, staggered entrance)
- **Modal/drawer**: `@resources/js/components/admin/booking/BookingDetail.jsx` (useDrawerTransition, fixed inset-0, slide-in-from-right)
- **UI components**: `@resources/js/components/ui/button.jsx`, `@resources/js/components/ui/input.jsx`, `@resources/js/components/ui/toast.jsx`
- **Hooks**: `@resources/js/hooks/useInView.js`

---

## Components to Create (Each in Its Own File)

Under `resources/js/components/admin/{feature}/`:

1. **`{Feature}List.jsx`** — Main container: state, filters, sorting, CRUD handlers, renders cards + form modal
2. **`{Feature}Card.jsx`** — Display item with badges, action menu (edit/delete/custom actions)
3. **`{Feature}Form.jsx`** — Drawer modal form (useDrawerTransition), create/edit modes, validation, toast feedback
4. **`{Feature}Filters.jsx`** — Search + dropdown filters (category, status, etc.), clear button, results count
5. **`{Feature}Summary.jsx`** — Stat cards (totals, breakdowns) using Lucide icons
6. **`index.js`** — Barrel export

---

## Data & State

### mockData.js
Add seed data:
```js
export const ADMIN_{FEATURE}S = [
  {
    id: '...',
    title: '...',
    category: '...',
    audience: '...', // e.g., 'all', 'hikers', 'staff', 'admins'
    content: '...',
    status: 'draft' | 'sent',
    createdAt: 'ISO_DATE',
    sentAt: 'ISO_DATE' | null,
    author: '...',
  },
  // ...
];
```

### adminStore.js
```js
import { ADMIN_{FEATURE}S } from '../mockData';

// In createSeed():
{
  // ...existing
  {feature}s: ADMIN_{FEATURE}S,
}

// Export CRUD functions:
export function create{Feature}(data) { ... }
export function update{Feature}(id, updates) { ... }
export function delete{Feature}(id) { ... }
export function send{Feature}(id) { ... } // or custom action
```

### Page Component
```js
const { profile, {feature}s } = useAdminStore();
const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
```

---

## Page Composition Template

```jsx
return (
  <div ref={ref} className="space-y-6 md:space-y-8">
    {/* Header - 0ms */}
    <header
      style={{ transitionDelay: '0ms' }}
      className={`flex flex-col gap-3 md:flex-row md:items-end md:justify-between transition-all duration-700 ease-out ${isInView
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-8 scale-95'
        }`}
    >
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
          Admin Console · {Feature}
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
          Title of this page
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-on-surface-variant md:text-base">
          Description of what this page manages.
        </p>
      </div>
      <Button variant="default" size="lg" className="h-11! shrink-0 gap-2">
        <Icon className="h-4 w-4" />
        Related Action
      </Button>
    </header>

    {/* Summary - 150ms */}
    <div
      style={{ transitionDelay: '150ms' }}
      className={`transition-all duration-700 ease-out ${isInView
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-8 scale-95'
        }`}
    >
      <{Feature}Summary {feature}s={feature}s />
    </div>

    {/* List - 300ms */}
    <div
      style={{ transitionDelay: '300ms' }}
      className={`transition-all duration-700 ease-out ${isInView
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-8 scale-95'
        }`}
    >
      <{Feature}List
        items={feature}s
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onSend={handleSend}
      />
    </div>
  </div>
);
```

---

## Routing (admin.jsx)

```js
import Admin{Feature} from './pages/admin/Admin{Feature}';

// ...
<Route path="/admin/{feature}" element={<Admin{Feature>} /> />
```

---

## Patterns to Replicate

### Staggered Animations
```js
const [ref, isInView] = useInView({ threshold: 0.15, triggerOnce: true });
// Apply to sections with transitionDelay: 0ms, 150ms, 300ms, 450ms...
```

### Badge Style Objects
```js
const CATEGORY_STYLES = {
  Category1: 'bg-color-50 text-color-700 border-color-200 dark:bg-color-900/30 dark:text-color-300 dark:border-color-800',
  Category2: '...',
  // ...
};

const STATUS_STYLES = {
  sent: 'bg-emerald-50 text-emerald-700 border-emerald-200 ...',
  draft: 'bg-amber-50 text-amber-700 border-amber-200 ...',
};

const AUDIENCE_STYLES = {
  all: 'bg-primary/10 text-primary border-primary/20',
  hikers: 'bg-green-50 text-green-700 border-green-200 ...',
  staff: 'bg-orange-50 text-orange-700 border-orange-200 ...',
  admins: 'bg-red-50 text-red-700 border-red-200 ...',
};
```

### ActionMenu Component
```jsx
function ActionMenu({ onEdit, onDelete, onCustom }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <Button variant="ghost" size="icon-sm" onClick={() => setOpen(!open)} aria-label="More options">
        <MoreVertical className="h-4 w-4" />
      </Button>
      {open && (
        <div className="absolute right-0 mt-1 w-40 rounded-xl border border-outline-variant bg-surface-container-lowest shadow-lg py-1.5 animate-in fade-in-0 zoom-in-95 duration-150">
          <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm font-medium" onClick={() => { onEdit(); setOpen(false); }}>
            <Edit2 className="h-4 w-4" /> Edit
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm font-medium text-primary" onClick={() => { onCustom(); setOpen(false); }}>
            <CustomIcon className="h-4 w-4" /> Custom Action
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 px-3 py-2 text-sm font-medium text-destructive" onClick={() => { onDelete(); setOpen(false); }}>
            <Trash2 className="h-4 w-4" /> Delete
          </Button>
        </div>
      )}
    </div>
  );
}
```

### Empty State
```jsx
<div className="flex flex-col items-center justify-center py-16 text-center">
  <Icon className="h-12 w-12 text-on-surface-variant/30" />
  <h3 className="mt-4 text-lg font-semibold text-on-surface">No {feature}s found</h3>
  <p className="mt-1 text-sm text-on-surface-variant">
    {hasFilters ? 'Try adjusting your filters' : 'Create your first {feature} to get started'}
  </p>
  {!hasFilters && (
    <Button variant="default" size="lg" className="mt-4 gap-2" onClick={() => handleOpenForm()}>
      <Plus className="h-4 w-4" /> Create {Feature}
    </Button>
  )}
</div>
```

### Loading State
```jsx
<div className="flex items-center justify-center py-12">
  <Loader2 className="h-8 w-8 animate-spin text-primary" />
</div>
```

### Toast Notifications
```js
import { toast } from '@/components/ui/toast';

toast.success('Success message');
toast.error('Error message');
```

---

## Checklist

- [ ] Create `resources/js/components/admin/{feature}/` folder
- [ ] Create all 6 component files + `index.js`
- [ ] Add `ADMIN_{FEATURE}S` to `mockData.js`
- [ ] Update `adminStore.js` with imports, seed, and CRUD exports
- [ ] Create `Admin{Feature}.jsx` page
- [ ] Register route in `admin.jsx`
- [ ] Run `vendor/bin/pint --dirty --format agent` to format