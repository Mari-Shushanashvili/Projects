###   Chunk 3: Frontend Data Fetching, Display, & Search (Assigned to: Megi)

- [x] **To-do 3.1: Install Axios (or use Fetch API):**  
  - In `frontend`, install Axios: `npm install axios`. (Or decide to use the built-in `fetch`).  
  - **GitHub Action:** Create branch `feature/frontend-data-fetching`. Commit dependency installation.

- [x] **To-do 3.2: Implement Data Fetching Logic:**  
  - In `frontend/src/App.tsx`, create a `localItems` state using `useState<LocalItem[]>`.  
  - Use `useEffect` to fetch data from `http://localhost:3001/api/local-items` on mount.  
  - Use Axios (or `fetch`) to make the GET request and update the `localItems` state with the response data. Handle potential errors.  
  - **GitHub Action:** Commit data fetching logic to `feature/frontend-data-fetching`.

- [x] **To-do 3.3: Pass Data to `ItemList` Component:**  
  - In `frontend/src/App.tsx`, pass the `localItems` state as a prop to the `<ItemList />` component.  
  - **GitHub Action:** Commit prop passing to `feature/frontend-data-fetching`.

- [x] **To-do 3.4: Render Data in `ItemList`:**  
  - In `frontend/src/components/ItemList.tsx`, receive the `localItems` prop (`LocalItem[]`).  
  - Use `.map()` to iterate over `localItems` and render an `<ItemCard localItem={item} key={item.id} />` for each.  
  - **GitHub Action:** Commit rendering logic to `feature/frontend-data-fetching`.

- [x] **To-do 3.5: Render Data in `ItemCard`:**  
  - In `frontend/src/components/ItemCard.tsx`, receive the `localItem` prop (`LocalItem`).  
  - Display relevant properties (e.g., `localItem.name`, `localItem.type`, `localItem.description`) in the JSX.  
  - **GitHub Action:** Commit rendering in `ItemCard` to `feature/frontend-data-fetching`.

- [x] **To-do 3.6: Test Data Display (Local Backend):**  
  - Ensure backend (`npm run dev` in `backend`) and frontend (`npm start` in `frontend`) are running. Verify data from the backend is displayed in the frontend.  
  - **GitHub Action:** (No code change, ensure testing).

- [x] **To-do 3.7: Manage Search State:**  
  - In `frontend/src/App.tsx`, create a new state for the search query (e.g., `const [searchQuery, setSearchQuery] = useState('');`).  
  - **GitHub Action:** Commit search state to `feature/frontend-data-fetching`.

- [x] **To-do 3.8: Handle Search Input:**  
  - Pass the `searchQuery` state and the `setSearchQuery` function as props to the `<SearchBar />` component.  
  - In `SearchBar.tsx`, make the input a controlled component by linking its `value` and `onChange` event to the props.  
  - **GitHub Action:** Commit search input handling to `feature/frontend-data-fetching`.

- [x] **To-do 3.9: Filter Displayed Data:**  
  - In `App.tsx`, before passing data to `<ItemList />`, create a new filtered array based on the `searchQuery`.  
  - Pass this `filteredItems` array to the `ItemList` component instead of the original `localItems`.  
  - **GitHub Action:** Commit filtering logic to `feature/frontend-data-fetching`.

- [x] **To-do 3.10: Merge Frontend Data & Search:**  
  - Create PR from `feature/frontend-data-fetching` to `main`. Review and merge.  
  - **GitHub Action:** Merge PR. Note merge commit link.
