import Layout from "../components/layout";


export default function Scores() {
    return (
        <Layout>
            
            <h1>Scores</h1>
            <div className="card mt-2">
                <div className="card-body">
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                </div>
            </div>
        </Layout>
        
    );
}