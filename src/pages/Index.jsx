import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Material 3 • Theme Editor</h1>
        <p className="text-xl mb-8">Create and preview your Material 3 theme visually</p>
        <Link to="/theme-editor">
          <Button size="lg">
            Start Editing Your Theme
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
