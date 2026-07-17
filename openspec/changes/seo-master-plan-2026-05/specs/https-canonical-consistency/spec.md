## ADDED Requirements

### Requirement: All user-facing links use HTTPS absolute origin
The production site SHALL NOT emit internal links with `http://` scheme to `costcohotdogguide.com`. Navigation, footer, and primary body CTAs SHALL use `https://costcohotdogguide.com` or root-relative paths that resolve to HTTPS.

#### Scenario: Navigation passes audit
- **WHEN** a developer greps `src/` for `http://costcohotdogguide`
- **THEN** no intentional internal marketing links remain (exceptions: external third-party URLs only)

### Requirement: HTTP host redirects to HTTPS
Production hosting SHALL respond with **301** from `http://costcohotdogguide.com/*` to `https://costcohotdogguide.com/*` preserving path and query.

#### Scenario: Legacy HTTP bookmark redirects
- **WHEN** a client requests `http://costcohotdogguide.com/`
- **THEN** the response is a 301 to `https://costcohotdogguide.com/`
