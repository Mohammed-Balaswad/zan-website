/**
 * Feature Flags & Phased Content Visibility Configuration
 *
 * Controls temporary visibility of navigation items and home page sections
 * for the Phase 1 launch pending verified company content.
 *
 * Set any flag to `true` to re-enable sections or navigation items
 * once verified content is available.
 */

export const FEATURE_FLAGS = {
  // Navigation dropdown items visibility
  nav: {
    investmentProjects: false,       // "Investment & Projects" dropdown item
    investmentOpportunities: false,  // "Investment Opportunities" dropdown item
    strategicPartners: true,         // "Strategic Partners" dropdown item (kept visible)
    investorsPartnerships: false,    // "Investors & Partnerships" dropdown item
  },

  // Home page sections visibility
  homeSections: {
    projectShowcase: false,          // "Business & Projects Portfolio" section
    opportunities: false,            // "Promising Opportunities" section
    sectors: false,                  // "Areas of Work" section
  },
};

/**
 * Dropdown group visibility helpers.
 * A dropdown parent is shown only if at least one of its child items is enabled.
 */
export const hasVisibleInvestmentLinks =
  FEATURE_FLAGS.nav.investmentProjects || FEATURE_FLAGS.nav.investmentOpportunities;

export const hasVisiblePartnershipLinks =
  FEATURE_FLAGS.nav.strategicPartners || FEATURE_FLAGS.nav.investorsPartnerships;
