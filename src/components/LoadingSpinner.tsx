const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
          <span className="text-primary-foreground font-bold text-xl">DO</span>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold gradient-primary bg-clip-text text-transparent">
            Daniel Okoye
          </h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading portfolio...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;