# React design patterns

## Layout components

Layout components are components in React whose primary concern is helping the user arrange other components they create on the page.

Examples of this include split screens, lists, and modals. The main idea of layout components is that your components shouldn't know or care where they are being displayed on the page. This gives you more flexibility in how you use them in the future.

---

The purpose of the RegularList component is to take an items array and a resource name, and then use the provided item component to display each item in the array. This allows for greater flexibility in terms of what kind of list items can be displayed. For example, a single RegularList component could be used to display a list of people, products, or anything else.

## Container components

Container components are React components that take care of all of the data loading and other data management for their child components. This allows child components to share logic and makes it so they don't need to know where their data is coming from or how to manage it.

Our components should not know where their data is coming from (Dumb components)
