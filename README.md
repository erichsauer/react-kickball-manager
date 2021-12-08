# Kickball Manager

## Demo

[https://alchemy-react-kickball-manager.netlify.app](https://alchemy-react-kickball-manager.netlify.app)

### Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use `props.match.params` or the `useParams` hook to get the `:id` in a path for creating a List/Detail pattern with react-router.
- Use `<Link>` to create links that navigate a Single Page Application.
- Use `.map` to iterate over an array and render elements for each item in an array.
- Use `useState` to manage component state.
- Use `useEffect` to manage component effects.
- Use CSS modules to manage component-level styling.
- Use methods to expose API calls to components.
- Use snapshot testing for presentational components.
- Manage loading state with async calls by using both `useEffect` & `useState`.

### Description

After building out your local kickball league's directory, some of the league's managers decided it's too much work to manually add/update/delete teams & players from the database. They've asked you to build an interface that allows them to create, update, and delete teams and players.

**Note: Although the demo uses authentication, you do NOT need to build a sign in form in your app.**

### Acceptance Criteria

- A user can create a new team
- A user can select a team from the list view and update them
- A user can select a team from the list view and delete them
- A user can create a new player
- A user can select a player from the list view and update them
- A user can select a player from the list view and delete them
- Each view & component has an associated test

### Rubric
 
| Task                  | Points |
| --------------------- | ------ |
| Create Team View      | 3      |
| Update Team View      | 3      |
| Delete Team           | 3      |
| Create Player View    | 3      |
| Update Player View    | 3      |
| Delete Player         | 3      |
| Tests                 | 2      |
