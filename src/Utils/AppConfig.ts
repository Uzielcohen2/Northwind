class AppConfig {

    // Home Route
    public HomeRoute: string = "/home"
    // --------------------------------------------------------------------------------------------


    // Products
    public productsUrl: string = "http://localhost:3030/api/products/";


    public readonly productsRoute: string = "/products/"
    public readonly productsDetailsRoute: string = this.productsRoute + "details/";
    public readonly productsEditRoute: string = this.productsRoute + "edit/";
    // --------------------------------------------------------------------------------------------

    //Suppliers 
    public suppliersUrl: string = "http://localhost:3030/api/suppliers/";

    public readonly suppliersRoute: string = "/suppliers/"
    public readonly supplierDetailsRoute: string = this.suppliersRoute + "details/";
    public readonly supplierEditRoute: string = this.suppliersRoute + "edit/";

    // --------------------------------------------------------------------------------------------

    //Employees 
    public employeesUrl: string = "http://localhost:3030/api/employees/";

    public employeesRoute: string = "/employees/"
    public readonly employeesDetailsRoute: string = this.employeesRoute + "details/";
    public readonly employeesEditRoute: string = this.employeesRoute + "edit/";
    // --------------------------------------------------------------------------------------------

    // Categories
    public readonly categoriesUrl: string = "http://localhost:3030/api/categories/";

    public categoriesRoute: string = "/categories/";
    public readonly categoriesDetailsRoute: string = this.categoriesRoute + "details/";
    public readonly categoriesEditRoute: string = this.categoriesRoute + "edit/";

    // --------------------------------------------------------------------------------------------

    //Auth
    public readonly registerUrl: string = "http://localhost:3030/api/register/";
    public readonly loginUrl: string = "http://localhost:3030/api/login/";

    // --------------------------------------------------------------------------------------------

    // Contact-us
    public contactRoute: string = "/contact-us"
    public readonly contactUrl: string = "http://localhost:3030/api/contact-us"
    // FAQ 
    public FAQ:string = "/FAQ"
    // --------------------------------------------------------------------------------------------



}
const appConfig = new AppConfig();
export default appConfig