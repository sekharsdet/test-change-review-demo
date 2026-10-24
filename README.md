# Weakened Test Check: demo

Example repository for [sekharsdet/test-change-review](https://github.com/sekharsdet/test-change-review).
Each open pull request makes one kind of risky test change, and the Action's comment on it shows what a reviewer sees:

- Weakened assertion: `toHaveText(...)` becomes `toBeVisible()`
- Changed expected value: the coupon total expectation changes
- Added wait: `waitForTimeout` and `force: true`

The tests here are illustrative and aren't run against an app; the Action only reads them.
