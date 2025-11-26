import ItemCount from "./features/ItemCount/itemCount";
import UserInfo from "./features/UserInfo/UserInfo";
import ThemeToggle from "./features/ThemeToggle/ThemeToggle";
import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <ItemCount />
      <UserInfo />
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
