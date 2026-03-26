# Блок 10: Данные продуктов — Content Collection

**Создать:** src/content/products/ — по одному .md файлу на продукт

Cursor должен скопировать ВСЕ 16 продуктов из source-DOM.html 
(строки 7913–9930) и создать .md файлы.

Список продуктов:
1. formula-money
2. business-mission
3. power-of-manifestation
4. seven-systems-abundance
5. family-unity
6. place-among-others
7. man-woman-relations
8. children-relations
9. power-of-acceptance
10. rules-of-life-systems
11. square-of-life-force
12. separation-from-family-scenarios
13. true-self
14. psychogenotypes
15. neuro-trainers
16. source-inner-joy

Каждый файл = slug.md с frontmatter из source-DOM.html.

Также добавь коллекцию products в src/content.config.ts
с Zod-схемой для всех полей.

НЕ ТРОГАЙ Footer, Navbar.
