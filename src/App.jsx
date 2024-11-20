import MainLayout from "./Layouts/MainLayout";
import AppRouter from "./router";

const App = () => {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
};

export default App;
