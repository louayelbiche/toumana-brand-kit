# Toumana Icon System

> **Library:** Lucide Icons
> **Style:** Outlined with rounded stroke caps (Apple/Airbnb aesthetic)
> **Default Size:** 20px (md)
> **Default Stroke:** 2px

## Design Principles

The Toumana icon system follows Apple and Airbnb design principles:

1. **Clean geometry** - Simple, recognizable shapes
2. **Consistent stroke weight** - 2px default across all icons
3. **Rounded stroke caps** - Warm, friendly appearance
4. **Outlined by default** - Filled variant for selected states
5. **Contextual status colors** - Active states use fill + darker outline based on context

## Icon Tokens

### Size Scale

| Token | Size | Use Case |
|-------|------|----------|
| `xs` | 14px | Badges, source indicators |
| `sm` | 16px | Inline text, compact UI |
| `md` | 20px | Buttons, nav items (default) |
| `lg` | 24px | Stat cards, section headers |
| `xl` | 32px | Empty states, modals |

### Stroke Width

| Token | Width | Use Case |
|-------|-------|----------|
| `light` | 1.5px | Large icons (24-32px) |
| `default` | 2px | Standard icons |
| `bold` | 2.5px | Selected/active state |

### Colors

| Token | Color | Use Case |
|-------|-------|----------|
| `default` | Gray 500 (#6B7280) | Default icon state |
| `hover` | Gray 700 (#374151) | Hover state |
| `active` | Status Color (contextual) | Selected/active state - uses status colors with fill + darker outline |
| `disabled` | Gray 300 (#D1D5DB) | Disabled state |
| `inverse` | White (#FFFFFF) | Dark backgrounds |
| `onPrimary` | White (#FFFFFF) | On gold background |
| `onSecondary` | White (#FFFFFF) | On teal background |

### Status Colors

| Token | Color | Use Case |
|-------|-------|----------|
| `success` | #10B981 | Check, confirmed |
| `warning` | #F59E0B | Alert, caution |
| `error` | #EF4444 | Error, destructive |
| `info` | #2EA3F2 | Information |

---

## Icon Categories

### Navigation (8 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Dashboard | `home` | HomeIcon |
| Bookings | `calendar` | CalendarIcon |
| Guests | `users` | UsersIcon |
| Properties | `building-2` | BuildingIcon |
| Settings | `settings` | SettingsIcon |
| Menu | `menu` | MenuIcon |
| Back | `chevron-left` | ChevronLeftIcon |
| Forward | `chevron-right` | ChevronRightIcon |

### Actions (12 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Add/Create | `plus` | PlusIcon |
| Edit | `pencil` | EditIcon |
| Delete | `trash-2` | DeleteIcon |
| Search | `search` | SearchIcon |
| Filter | `sliders-horizontal` | FilterIcon |
| Sort | `arrow-up-down` | SortIcon |
| Close | `x` | CloseIcon |
| Confirm | `check` | CheckIcon |
| More | `more-horizontal` | MoreIcon |
| Refresh | `refresh-cw` | RefreshIcon |
| Download | `download` | DownloadIcon |
| Upload | `upload` | UploadIcon |

### Booking Sources (8 icons)

| Source | Icon Type | Notes |
|--------|-----------|-------|
| Direct | `home` (Lucide) | Direct website booking |
| Phone | `phone` (Lucide) | Phone reservation |
| Email | `mail` (Lucide) | Email booking |
| Walk-in | `user-check` (Lucide) | In-person arrival |
| Airbnb | Custom SVG | Airbnb belo logo |
| Booking.com | Custom SVG | Booking.com mark |
| Expedia | Custom SVG | Expedia dot logo |
| WhatsApp | Custom SVG | WhatsApp logo |

### Room Amenities (15 icons)

| Amenity | Lucide Icon | Name |
|---------|-------------|------|
| Bed | `bed-double` | BedIcon |
| Bathroom | `bath` | BathIcon |
| Kitchen | `cooking-pot` | KitchenIcon |
| WiFi | `wifi` | WifiIcon |
| Air Conditioning | `thermometer-snowflake` | AcIcon |
| Pool | `waves` | PoolIcon |
| Parking | `car` | ParkingIcon |
| Terrace | `sun` | TerraceIcon |
| Garden | `trees` | GardenIcon |
| Sea View | `ship` | SeaViewIcon |
| TV | `tv` | TvIcon |
| Washing | `shirt` | WashingIcon |
| Safe | `lock` | SafeIcon |
| Accessible | `accessibility` | AccessibleIcon |
| Pet Friendly | `paw-print` | PetIcon |

### Restaurant / F&B (8 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Restaurant | `utensils` | RestaurantIcon |
| Menu | `book-open` | MenuBookIcon |
| Order | `clipboard-list` | OrderIcon |
| Breakfast | `coffee` | BreakfastIcon |
| Dinner | `utensils-crossed` | DinnerIcon |
| Drinks | `wine` | DrinksIcon |
| Room Service | `bell` | RoomServiceIcon |
| Chef | `chef-hat` | ChefIcon |

### Housekeeping (6 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Cleaning | `spray-can` | CleaningIcon |
| Maintenance | `wrench` | MaintenanceIcon |
| Laundry | `shirt` | LaundryIcon |
| Ready | `check-circle` | ReadyIcon |
| Dirty | `circle-x` | DirtyIcon |
| In Progress | `loader` | ProgressIcon |

### Communication (6 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Notification | `bell` | BellIcon |
| Message | `message-circle` | MessageIcon |
| Phone | `phone` | PhoneIcon |
| Email | `mail` | EmailIcon |
| Chat | `message-square` | ChatIcon |
| Alert | `alert-circle` | AlertIcon |

### Status Indicators (6 icons)

| Status | Lucide Icon | Color |
|--------|-------------|-------|
| Success | `check-circle` | Success (#10B981) |
| Warning | `alert-triangle` | Warning (#F59E0B) |
| Error | `x-circle` | Error (#EF4444) |
| Info | `info` | Info (#2EA3F2) |
| Pending | `clock` | Gray (#6B7280) |
| New | `sparkles` | Gold (#E09900) |

### Analytics (6 icons)

| Purpose | Lucide Icon | Name |
|---------|-------------|------|
| Revenue | `dollar-sign` | DollarIcon |
| Chart | `bar-chart-3` | ChartIcon |
| Trend Up | `trending-up` | TrendUpIcon |
| Trend Down | `trending-down` | TrendDownIcon |
| Occupancy | `percent` | PercentIcon |
| Date Range | `calendar-range` | DateRangeIcon |

---

## Implementation

### Installation

```bash
npm install lucide-react
```

### Usage

```tsx
import { Home, Calendar, Users } from "lucide-react";

// Basic usage
<Home className="w-5 h-5 text-gray-500" />

// With hover state
<Home className="w-5 h-5 text-gray-500 hover:text-gray-700" />

// Active/selected state
<Home
  className="w-5 h-5 text-gold-500"
  fill="currentColor"
  strokeWidth={2.5}
/>

// On dark background
<Home className="w-5 h-5 text-white" />
```

### Tailwind Classes

```css
/* Size classes */
.icon-xs { @apply w-3.5 h-3.5; }
.icon-sm { @apply w-4 h-4; }
.icon-md { @apply w-5 h-5; }
.icon-lg { @apply w-6 h-6; }
.icon-xl { @apply w-8 h-8; }

/* State classes */
.icon-default { @apply text-gray-500; }
.icon-hover { @apply hover:text-gray-700; }
.icon-disabled { @apply text-gray-300; }

/* Active states - contextual by status */
.icon-active-success {
  fill: #10B981;
  stroke: #059669;
  stroke-width: 2.5;
}
.icon-active-warning {
  fill: #F59E0B;
  stroke: #D97706;
  stroke-width: 2.5;
}
.icon-active-error {
  fill: #EF4444;
  stroke: #DC2626;
  stroke-width: 2.5;
}
.icon-active-info {
  fill: #2EA3F2;
  stroke: #1D4ED8;
  stroke-width: 2.5;
}
```

### Active State Pattern

Active/selected icons use **fill + darker outline** to maintain visual definition:

| Status | Fill (500) | Outline (600) | Use Case |
|--------|------------|---------------|----------|
| Success | #10B981 | #059669 | Confirmed, complete, selected |
| Warning | #F59E0B | #D97706 | Pending, caution |
| Error | #EF4444 | #DC2626 | Failed, destructive |
| Info | #2EA3F2 | #1D4ED8 | Active, informational |

```tsx
// Active success state
<Home
  className="w-5 h-5"
  fill="#10B981"
  stroke="#059669"
  strokeWidth={2.5}
/>
```

---

## Brand Logos (Custom SVGs)

The following booking source icons use official brand marks and must remain as custom SVGs:

- **Airbnb** - Belo logo (Simple Icons)
- **Booking.com** - B mark (Simple Icons)
- **Expedia** - Dot logo (Simple Icons)
- **WhatsApp** - Chat logo (Simple Icons)

These are located in `/src/components/icons/booking-sources/`.

---

## Accessibility

1. **Decorative icons** - Add `aria-hidden="true"`
2. **Meaningful icons** - Use adjacent text or `aria-label`
3. **Icon buttons** - Always include `aria-label`
4. **Touch targets** - Minimum 44x44px for mobile

```tsx
// Decorative
<Home aria-hidden="true" className="w-5 h-5" />

// Icon button
<button aria-label="Go home">
  <Home className="w-5 h-5" />
</button>

// With text
<span className="flex items-center gap-2">
  <Home aria-hidden="true" className="w-4 h-4" />
  Home
</span>
```
