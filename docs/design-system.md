# ZAN Website — Design System

## 1. Color System

### Primary

Deep Navy:
#0B1F33

Purpose:
Main brand color, navigation, dark sections, footer, strong backgrounds.

### Primary Dark

#061421

Purpose:
Very dark backgrounds and deep contrast areas.

### Gold

#C6A15B

Purpose:
Premium accent, highlights, icons, borders, selected states.

Gold should be used sparingly.

### Gold Light

#D8BD86

Purpose:
Secondary gold accent when softer contrast is needed.

### White

#FFFFFF

Purpose:
Main text on dark backgrounds and clean surfaces.

### Off White

#F7F6F2

Purpose:
Light page backgrounds and section separation.

### Text Dark

#17212B

Purpose:
Primary text on light backgrounds.

### Text Muted

#66717C

Purpose:
Secondary descriptions and supporting information.

### Border

#E5E7EB

Purpose:
Subtle borders on light surfaces.


## 2. Typography

Primary Arabic font:

IBM Plex Sans Arabic

English/Russian font:

Manrope

Typography should prioritize:

- Readability
- Professional appearance
- Clear hierarchy
- Good multilingual rendering


## 3. Container

Maximum content width:

1280px

Preferred horizontal padding:

Desktop: 32px
Tablet: 24px
Mobile: 20px


## 4. Spacing System

Use a consistent spacing scale based on multiples of 4px.

Common values:

4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
120px

Avoid arbitrary spacing values unless there is a clear reason.


## 5. Section Spacing

Desktop:

80px – 120px vertical spacing.

Tablet:

64px – 80px.

Mobile:

48px – 64px.

Large hero sections may use more space when visually justified.


## 6. Border Radius

General radius:

12px

Cards:

16px

Buttons:

8px

Small UI elements:

6px

Avoid excessive pill-shaped components.

Pills should only be used when semantically appropriate, such as statuses or tags.


## 7. Buttons

Primary button:

- Navy or Gold depending on context
- Strong contrast
- 8px radius
- Medium/bold typography
- Comfortable horizontal padding

Secondary button:

- Transparent or light background
- Subtle border
- Same height as primary button

Buttons should generally have:

Minimum height: 44px


## 8. Cards

Cards should use:

- 16px radius
- Subtle border
- Minimal shadow
- Consistent internal padding
- Clear hierarchy

Cards should not visually compete with the content.


## 9. Shadows

Use shadows very sparingly.

Preferred style:

- Soft
- Low opacity
- Large blur
- No dramatic floating effects

Dark sections may rely on contrast instead of shadows.


## 10. Borders

Borders should be subtle.

Light surfaces:

#E5E7EB

Dark surfaces:

Use a low-contrast white border with transparency.

Gold borders should be reserved for selected/highlighted elements.


## 11. Icons

Use Lucide React.

Icons should be:

- Simple
- Consistent
- Thin/medium weight
- Used to support meaning

Avoid decorative icon overload.


## 12. Images

Use:

- High-quality images
- Consistent aspect ratios
- Proper object-fit behavior
- Lazy loading where appropriate

Avoid stretching images.


## 13. Responsive Breakpoints

Mobile:
< 640px

Tablet:
640px – 1023px

Desktop:
1024px+

Large desktop:
1280px+

The layout must be tested at common widths rather than relying only on breakpoints.


## 14. RTL / LTR

Arabic:

direction: rtl

English:

direction: ltr

Russian:

direction: ltr

The layout must support both directions without duplicated page implementations.


## 15. Motion

Default transition:

150ms – 300ms

Page/section reveal:

400ms – 700ms

Motion should be subtle.

Respect reduced-motion preferences.


## 16. Design Rule

Consistency is more important than adding visual effects.

If a new component needs a value that does not exist in this system, first consider whether an existing system value can be reused.

Do not create arbitrary colors, radii, spacing, shadows, or typography sizes without a reason.