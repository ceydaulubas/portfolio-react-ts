import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../App';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Switch
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              paddingRight: 2,
            }}>
            🌙
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            🔆
          </div>
        }
        onColor={'#eee'}
        onChange={handleThemeToggle}
        checked={theme === 'light'}
      />
    </div>
  );
};

export default ThemeToggle;
