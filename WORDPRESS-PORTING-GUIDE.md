# WordPress Porting Guide

This document maps every React component and page to its WordPress theme equivalent.

## Shared Components

| React Component           | WP Equivalent                          | Notes                    |
|---------------------------|----------------------------------------|--------------------------|
| `PageLayout.tsx`          | `page.php` / `get_header()` + `get_footer()` | Wraps all inner pages    |
| `PageHero.tsx`            | `template-parts/page-hero.php`         | Reusable dark hero banner |

## Homepage Template Mapping (index.php)

| React Component           | WP Template Part                       | Section ID           |
|---------------------------|----------------------------------------|----------------------|
| `Navbar.tsx`              | `header.php`                           | `#site-header`       |
| `Hero.tsx`                | `template-parts/hero.php`              | `#hero`              |
| `IntroSection.tsx`        | `template-parts/intro.php`             | `#intro`             |
| `SurveyTypes.tsx`         | `template-parts/survey-types.php`      | `#choose-survey`     |
| `SafeHands.tsx`           | `template-parts/safe-hands.php`        | `#why-choose-us`     |
| `NewsInsights.tsx`        | `template-parts/coverage.php`          | `#coverage`          |
| `CtaSection.tsx`          | `template-parts/local-surveyor.php`    | `#local-surveyor`    |
| `QuoteRequestForm.tsx`    | `template-parts/quote-form.php`        | `#quote-request`     |
| `GetInTouch.tsx`          | `template-parts/get-in-touch.php`      | `#get-in-touch`      |
| `Footer.tsx`              | `footer.php`                           | `#site-footer`       |

## Inner Page Mapping

| React Page                        | WP Template File                | `data-page` attribute    |
|-----------------------------------|---------------------------------|--------------------------|
| `pages/surveys/HomeBuyerCondition`| `page-home-buyer-condition.php` | `home-buyer-condition`   |
| `pages/surveys/BuildingSurvey`    | `page-building-survey.php`      | `building-survey`        |
| `pages/surveys/SingleDefect`      | `page-single-defect.php`        | `single-defect`          |
| `pages/surveys/BuyToLet`          | `page-buy-to-let.php`           | `buy-to-let`             |
| `pages/surveys/NewBuildSnagging`  | `page-new-build-snagging.php`   | `new-build-snagging`     |
| `pages/surveys/PropertyConsultancy`| `page-property-consultancy.php`| `property-consultancy`   |
| `pages/SurveyMyths`              | `page-survey-myths.php`         | `survey-myths`           |
| `pages/WhyNeedSurvey`            | `page-why-need-survey.php`      | `why-need-survey`        |
| `pages/PrivacyPolicy`            | `page-privacy-policy.php`       | `privacy-policy`         |
| `pages/TermsOfUse`               | `page-terms-of-use.php`         | `terms-of-use`           |
| `pages/CookiePolicy`             | `page-cookie-policy.php`        | `cookie-policy`          |
| `pages/NotFound`                  | `404.php`                        | —                        |
| `pages/Unsubscribe`              | `page-unsubscribe.php`          | `unsubscribe`            |

## CSS Class Naming Convention

All sections use a `vs-` (Victory Surveys) prefix alongside Tailwind:

```
vs-section          — every <section>
vs-section--hero    — BEM modifier per section
vs-container        — max-width wrapper
vs-card             — card elements
vs-form             — form wrappers
vs-form__field      — form field groups
vs-form__label      — labels
vs-form__input      — inputs/selects/textareas
vs-btn              — buttons
vs-btn--primary     — primary CTA
vs-btn--outline     — outline variant
```

## Form Submission (Backend)

Forms use `src/lib/form-submit.ts` which centralises all email logic.

**WordPress replacement:**
1. Register REST routes in `functions.php`:
   ```php
   add_action('rest_api_init', function () {
     register_rest_route('victory/v1', '/contact', [...]);
     register_rest_route('victory/v1', '/quote', [...]);
   });
   ```
2. Replace JS `submitContactForm()` / `submitQuoteForm()` with `fetch('/wp-json/victory/v1/contact', { method: 'POST', body: ... })`
3. Use `wp_mail()` on the server side.

## Postcode Finder

Uses free APIs:
- `https://api.postcodes.io/postcodes/{postcode}` — postcode lookup
- `https://nominatim.openstreetmap.org/reverse` — street name reverse geocode

These work without API keys and can be called from WP theme JS unchanged.

## Assets

All images are in `src/assets/` and `public/`. Copy to `wp-content/themes/victory/assets/images/`.

## Colour Tokens

Defined in `src/index.css` as CSS custom properties (HSL). Copy the `:root` block directly into the WP theme's `style.css`.

## Fonts

Montserrat via Google Fonts — enqueue in `functions.php`:
```php
wp_enqueue_style('victory-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
```
