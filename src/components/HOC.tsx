import React from "react";

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return ({ loading, error, ...props }: P & { loading: boolean, error: boolean  }) => {
    if (loading) return <div>Loading...</div>;
    if(error) return <div>Error loading products. Please try again later.</div>;
    return <WrappedComponent {...(props as P)} />;
  };
};

export default withLoading;
