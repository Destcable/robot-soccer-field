import { Admin, Resource, fetchUtils } from "react-admin";
import SoccerFieldsList from "./resources/soccer/Field/SoccerFieldsList";
import SoccerFieldsCreate from "./resources/soccer/Field/SoccerFieldsCreate";
import SoccerConstructorList from "./resources/soccer/constructor/SoccerConstructorList";
import SoccerConstructorCreate from "./resources/soccer/constructor/SoccerConstructorCreate";

const apiUrl = 'http://127.0.0.1:3000';
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
    getList: (resource, params) => {
        return httpClient(`${apiUrl}/${resource}`).then(({ headers, json }) => {
            return {
                data: json,
                total: json.length,
            };
        });
    },
    create: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data)
        })
        return { data: json }
    }
}


const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="soccer/field" list={SoccerFieldsList} create={SoccerFieldsCreate} options={{ label: 'Футбольные поля' }} />
        <Resource name="soccer/constructor" list={SoccerConstructorList} create={SoccerConstructorCreate} options={{ label: 'Конструктор полей' }} />
    </Admin>
);

export default App;