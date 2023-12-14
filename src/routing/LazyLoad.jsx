import { lazy, Suspense } from 'react';

const CreateTask = lazy(() => import('../components/tasks/createTask/CreateTask'));
const Tesct = lazy(() => import('../components/Test/Tesct'));
const AddMemberInGroup = lazy(() => import('../components/layout/groups/addMemberInGroup'));
const SignedOutNavbar = lazy(() => import('../components/layout/SignedOutNavbar'));
const CreateGroup = lazy(() => import('../components/layout/groups/CreateGroup'));
const Navbar = lazy(() => import('../components/layout/Navbar'));
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'));
const TaskDetails = lazy(() => import('../components/tasks/TaskDetails/TaskDetails'));

const LazyCreateTask = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CreateTask {...props} />
  </Suspense>
);

const LazyTesct = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Tesct {...props} />
  </Suspense>
);

const LazyAddMemberInGroup = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <AddMemberInGroup {...props} />
  </Suspense>
);

const LazySignedOutNavbar = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <SignedOutNavbar {...props} />
  </Suspense>
);

const LazyCreateGroup = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CreateGroup {...props} />
  </Suspense>
);

const LazyNavbar = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Navbar {...props} />
  </Suspense>
);

const LazyDashboard = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Dashboard {...props} />
  </Suspense>
);

const LazyTaskDetails = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <TaskDetails {...props} />
  </Suspense>
);

export {
  LazyCreateTask as CreateTask,
  LazyTesct as Tesct,
  LazyAddMemberInGroup as AddMemberInGroup,
  LazySignedOutNavbar as SignedOutNavbar,
  LazyCreateGroup as CreateGroup,
  LazyNavbar as Navbar,
  LazyDashboard as Dashboard,
  LazyTaskDetails as TaskDetails,
};
