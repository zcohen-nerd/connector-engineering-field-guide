# Migration Notes

## Source and Outcome

- Source migrated: *Professional Connector Engineering - Master Reference* (`connector_engineering_master_guide.docx`)
- Source file was preserved and not deleted.
- The repository did not contain the requested MkDocs skeleton at the start of migration, so the requested file layout and minimal MkDocs config were created to match the provided page map.

## Section Mapping

| Source section | Markdown target |
| --- | --- |
| Title page / contents / core mental model | `docs/index.md` |
| 1. What Connectors Actually Do in a System | `docs/01-what-connectors-do.md` |
| 2. Major Connector Categories | `docs/02-connector-categories.md` |
| 3. Connector Standards and Families | `docs/03-standards-and-families.md` |
| 4. Connector Selection - Think in This Order | `docs/04-selection-workflow.md` |
| 5. Connector Anatomy | `docs/05-connector-anatomy.md` |
| 6. How to Read a Connector Datasheet | `docs/06-reading-datasheets.md` |
| 7. `MIL-DTL-38999` Deep Dive | `docs/07-mil-dtl-38999.md` |
| 8. M12 Deep Dive | `docs/08-m12.md` |
| 9. Connector Decision Examples | `docs/09-decision-examples.md` |
| 10. Practical Selection Checklist | `docs/10-selection-checklist.md` |
| 11. Red Flags and Beginner Mistakes | `docs/11-red-flags.md` |
| 12. Hobby/Prototype vs. Production/Rugged | `docs/12-hobby-vs-rugged.md` |
| 13. Hands-On Learning Exercises | `docs/13-learning-exercises.md` |
| 14. 30-Day Learning Plan | `docs/14-thirty-day-plan.md` |
| Appendix: Quick-Reference Tables | `docs/appendix/quick-reference.md` |

## Derived Files

- `docs/appendix/glossary.md` was derived from terms already defined or used in the source text.
- `docs/appendix/source-notes.md` records provenance and follow-up verification markers.
- The `templates/` files and `examples/rugged-control-box/README.md` were derived from the source checklist, exercises, and decision examples.

## Technical Review TODOs

- Verify exact standards coverage and clause-level claims on the standards/families and M12 pages.
- Verify exact 38999 shell-size, contact-current, keying, and part-decoder claims against current manufacturer literature.
- Verify the IP reference notes and any exact current/torque values against current source documents.
