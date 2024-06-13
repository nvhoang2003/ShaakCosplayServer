using MongoDB.Driver;

namespace shaakCosplayMarketBE.Models
{
    public class DataContext
    {
        private readonly IMongoDatabase _database;

        public DataContext(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<Product> Products => _database.GetCollection<Product>("Product");
    }
}
