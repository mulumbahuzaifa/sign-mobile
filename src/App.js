import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  const projectID = "7d28ba01-55f2-4d26-a5a8-b569e1075790";

  return (
    <div>
      <div>Hello</div>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;
