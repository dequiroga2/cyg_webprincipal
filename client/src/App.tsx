import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import Solutions from "@/pages/solutions";
import Industries from "@/pages/industries";
import Regulations from "@/pages/regulations";
import ContactUs from "@/pages/contact-us";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/regulations" component={Regulations} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
