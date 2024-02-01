import Header from "../components/Header/Header";
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'

function List() {

    const columns = [
        { title: "First Name", field: "firstName", width: 150 },
        { title: "Last Name", field: "lastName", width: 150 },
        { title: "Date of Birth", field: "dateOfBirth", hozAlign: "center" },
        { title: "Start Date", field: "startDate", hozAlign: "center" },
        { title: "Department", field: "department" },
        { title: "Street", field: "street" },
        { title: "City", field: "city" },
        { title: "State", field: "state" },
        { title: "Zip Code", field: "zipCode", hozAlign: "center" },
    ];
    
    var data = [
        { id: 1, firstName: "John", lastName: "Doe", dateOfBirth: "1990-05-12", startDate: "2020-01-01", department: "Marketing", street: "123 Main Street", city: "New York", state: "NY", zipCode: "10001" },

    ];    

    return (
        <div>
            <Header page='list' />
            <p>Employee list</p>
            <ReactTabulator
                data={data}
                columns={columns}
                layout={"fitData"}
            />
        </div>
    );
}

export default List;