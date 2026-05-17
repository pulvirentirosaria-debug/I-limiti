import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import ExercisePage from "@/pages/ExercisePage";
import QuizPage from "@/pages/QuizPage";
import PrintPage from "@/pages/PrintPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/esercizio/:id" component={ExercisePage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/stampa" component={PrintPage} />
      <Route>
        <div className="min-h-screen flex items-center justify-center text-slate-500">
          Pagina non trovata.
        </div>
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}
