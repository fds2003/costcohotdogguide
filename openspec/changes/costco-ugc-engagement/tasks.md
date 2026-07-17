## 1. Feature Flags Infrastructure

- [ ] 1.1 Create `src/data/features.json` with `commentsEnabled: false` as default
- [ ] 1.2 Verify features.json is importable in Astro components and builds without errors

## 2. Giscus Comments Component

- [ ] 2.1 Create `src/components/GiscusComments.astro` with conditional rendering based on `features.json`
- [ ] 2.2 Add Giscus configuration props: `repo`, `repoId`, `category`, `categoryId`, `mapping`
- [ ] 2.3 Implement `<script>` tag output with `defer` attribute and `min-height: 200px` container
- [ ] 2.4 Test GiscusComments renders nothing when `commentsEnabled: false`
- [ ] 2.5 Inject GiscusComments into BaseLayout article pages (or specific `/articles/` pages)
- [ ] 2.6 Inject GiscusComments into `/menu/` page
- [ ] 2.7 Verify no CLS or LCP impact by checking container has fixed height

## 3. VotePoll Component

- [ ] 3.1 Create `src/components/VotePoll.astro` with `question` and `options` props
- [ ] 3.2 Implement poll options view with clickable buttons/cards
- [ ] 3.3 Implement results view with percentage bars and highlighted user selection
- [ ] 3.4 Add localStorage persistence using key `costco-poll-{pollId}`
- [ ] 3.5 Add auto-detection of previous vote (show results view if already voted)
- [ ] 3.6 Style VotePoll to match existing site design (Tailwind classes)

## 4. VotePoll Integration

- [ ] 4.1 Add VotePoll to `/articles/is-it-healthy/` with question "What's your favorite Costco Food Court item?"
- [ ] 4.2 Add VotePoll to `/menu/` with question "Which Food Court item do you order most often?"

## 5. Validation & Deployment

- [ ] 5.1 Run `npm run build` and verify no build errors with `commentsEnabled: false`
- [ ] 5.2 Test VotePoll interaction: click option → see results → reload → results persist
- [ ] 5.3 Deploy to production and verify both components work
- [ ] 5.4 Document Giscus GitHub repo setup steps in a code comment or README
