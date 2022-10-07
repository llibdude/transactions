## Getting Started

First install dependencies,

`npm install`

Then run the development server:

`npm run dev`

### Testing

`npm run test`

For the purpose of this exercise, the entire application is not fully unit tested.

## Requirements

- node v16.7.1+
- npm v8.19.2+

## Technical Stack

- [NextJS](https://nextjs.org/): This application is written in NextJS, a library built on top of React. I have chosen it due to its fast ramp up time, ability to write apis without spinning up a separate server, and various developer improvements.
- [TailwindCSS](https://tailwindcss.com/): Styled using TailwindCSS - the css framework scales well with a large team and allows you to keep your view and your styles together in one place. Very fast to create with once familiar with the classNames and highly extensible.
- [Prettier.io](https://prettier.io/): Opinionated code formatter. Helpful to enforce a singular codeing style across the entire team to prevent whitespace churn in pull requests.
- [React table](https://www.npmjs.com/package/react-table): An unopinionated, powerful, easy to use table in React
- [useSWR](https://swr.vercel.app/): A library built on a strategy to keep data up to date while keeping the UI fast and reactive. First show the cached data, fetch the fresh data, and reconcile to ensure most up to date data.

## Next steps

- Enforce a11y accessibility with linters. In the case of a product that helps people pay rent, it is likely that an elderly
  population with seeing impairments will use this product. Making things easy to see and enabling screen readers is important.
- Consider scale. If there were hundres of transactions this table would become unmanagable. Work with the api to create a way to paginate data, and on the front end enable it via an auto complete search bar with debounce and an infinite scrolling feature or paging feature.
- Add filtering. Being able to filter by credit/debit could be useful, if there were more granular categories in the future filtering would be helpful there as well.
- Consider mobile applications, test for cross browser compatibility including that of older browsers.
- For the last column with details, consider alternative solutions so the table isn't super wide. Perhaps a tooltip on hover, or clicking on a row expands the row and shows details in an accordion style.
