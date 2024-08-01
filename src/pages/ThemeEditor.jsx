import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ThemeEditor = () => {
  const [theme, setTheme] = useState({
    primary: '#6750A4',
    secondary: '#958DA5',
    tertiary: '#B58392',
    error: '#B3261E',
    background: '#FFFBFE',
    surface: '#FFFBFE',
    outline: '#79747E',
  });

  const handleColorChange = (colorRole, value) => {
    setTheme(prevTheme => ({ ...prevTheme, [colorRole]: value }));
  };

  const generateThemeJson = () => {
    const themeJson = {
      "schemes": {
        "light": {
          "primary": theme.primary,
          "secondary": theme.secondary,
          "tertiary": theme.tertiary,
          "error": theme.error,
          "background": theme.background,
          "surface": theme.surface,
          "outline": theme.outline,
        }
      }
    };
    return JSON.stringify(themeJson, null, 2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Material 3 • Theme Editor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Color Picker</h2>
          {Object.entries(theme).map(([colorRole, value]) => (
            <div key={colorRole} className="mb-4 flex items-center">
              <label className="w-24">{colorRole}:</label>
              <Input
                type="color"
                value={value}
                onChange={(e) => handleColorChange(colorRole, e.target.value)}
                className="w-16 h-10"
              />
              <Input
                type="text"
                value={value}
                onChange={(e) => handleColorChange(colorRole, e.target.value)}
                className="ml-2 w-28"
              />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          <Card className="mb-4" style={{ backgroundColor: theme.surface, borderColor: theme.outline }}>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.primary }}>Card Title</h3>
              <p style={{ color: theme.secondary }}>This is some content inside the card.</p>
              <Button className="mt-4" style={{ backgroundColor: theme.primary, color: theme.background }}>
                Primary Button
              </Button>
              <Button className="mt-2" variant="outline" style={{ borderColor: theme.secondary, color: theme.secondary }}>
                Secondary Button
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Generated Theme JSON</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {generateThemeJson()}
        </pre>
      </div>
    </div>
  );
};

export default ThemeEditor;
