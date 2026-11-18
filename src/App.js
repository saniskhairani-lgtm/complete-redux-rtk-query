import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./redux/features/counterSlice";
import { addIncome, subtractIncome } from "./redux/features/userIncomeSlice";
import { useGetPostsQuery } from "./redux/features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { useAddPostMutation } from "./redux/features/api/apiSlice";

export default function App() {

  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const income = useSelector((state) => state.userIncome.income);
  const dispatch = useDispatch();
  const { data: posts, isLoading, isError } = useGetPostsQuery(undefined, {
  pollingInterval: 10000,}
  );
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();
  return (
    <div>
      <h3>
        In this application we are using redux toolkit to manage Global state
        for counter and user income. Store has reference for two slices/features
        which are counterSlice and userIncomeSlice.{" "}
      </h3>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
      <div>
        <p>Income: {income}</p>
        <button onClick={() => dispatch(addIncome(1000))}>+1000</button>
        <button onClick={() => dispatch(subtractIncome(1000))}>-1000</button>
      </div>
      <div>
        <h3>Posts</h3>
        {isLoading && <p>Loading posts...</p>}
        {isError && <p>Could not load posts.</p>}
        <button onClick={() => navigate('/temp')}>Temp</button>
        {posts && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
