```javascript
//solution.js
<div className="bg-gray-100 p-4 rounded-lg shadow-md dark:shadow-lg">
  <h2 className="text-xl font-bold mb-2">Some Component</h2>
  <p>This is some component content.</p>
</div>
```
Adding `dark:shadow-lg` provides a fallback that resolves the issue.  This likely means that the `shadow-md` class is conflicting with a dark mode setting, and the explicit declaration is needed for consistent shadow rendering across themes.