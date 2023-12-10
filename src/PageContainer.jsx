function PageContainer({ children }) {
    return <div className="w-full flex flex-col">
        {children}
    </div>;
}

export default PageContainer;