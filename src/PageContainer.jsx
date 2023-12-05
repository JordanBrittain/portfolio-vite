function PageContainer({ children }) {
    return <div className="w-screen flex flex-col">
        {children}
    </div>;
}

export default PageContainer;