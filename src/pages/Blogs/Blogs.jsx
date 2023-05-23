const Blogs = () => {
  return (
    <div className="py-10 mx-10">
      <h2 className="text-center text-purple-950 text-4xl mb-14">
        Questions & Answers
      </h2>
      {/* 1st QA */}
      <div className="card mx-10 bg-fuchsia-400 mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token?
          </h2>
          <p>
            An access token is a credential used to authenticate and authorize
            access to protected resources in a system. It is typically issued by
            an authentication server after a user successfully logs in or a
            client application successfully authenticates. The access token is
            included in each request to the server to access protected resources
            and is used to verify the user's or client's identity and
            permissions.
          </p>
          <p>
            A refresh token is a credential that is used to obtain a new access
            token when the current one expires. It is typically issued along
            with the access token and has a longer expiration time. When the
            access token expires, the client can use the refresh token to
            request a new access token without having to re-authenticate the
            user. This helps to maintain a user's or client's session and
            provides a smoother user experience without frequent logins.
          </p>
        </div>
      </div>
      {/* 2nd QA */}
      <div className="card mx-10 bg-fuchsia-400 mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">
            How do they work and where should we store them on the client-side?
          </h2>
          <p>
            When a client receives an access token and a refresh token, it
            typically stores them securely on the client-side. The access token
            is usually stored in memory or a short-lived storage mechanism, as
            it is needed for making authenticated requests to the server.
          </p>
          <p>
            On the other hand, the refresh token should be stored securely for a
            longer period, such as in a secure cookie or token storage
            mechanism. It should be protected from unauthorized access, as it
            holds the ability to obtain a new access token.
          </p>
          <p>
            When the client needs to access a protected resource, it includes
            the access token in the request. If the access token is expired or
            invalid, the server responds with an error. At this point, the
            client can use the stored refresh token to request a new access
            token from the authentication server without requiring the user to
            re-enter their credentials.
          </p>
        </div>
      </div>
      {/* 3rd QA */}
      <div className="card mx-10 bg-fuchsia-400 mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
          <p>
            SQL (Structured Query Language) and NoSQL (Not only SQL) databases
            are two different types of database management systems with distinct
            characteristics:
          </p>
          <u>SQL Databases:</u>
          <ul>
            <li>
              Relational Structure: SQL databases use a relational structure,
              where data is organized into tables with predefined schemas and
              relationships between tables.
            </li>
            <li>
              Structured Data: They are suitable for structured data with fixed
              schemas, such as financial records, user profiles, and
              transactional data.
            </li>
            <li>
              ACID Compliance: SQL databases prioritize ACID (Atomicity,
              Consistency, Isolation, Durability) properties, ensuring data
              integrity and transactional consistency.
            </li>
            <li>
              Query Language: SQL databases utilize SQL as the standardized
              query language for managing and manipulating data.
            </li>
            <li>
              Scalability: They can scale vertically by upgrading hardware or by
              partitioning data across multiple servers, but scaling
              horizontally can be more challenging.
            </li>
          </ul>
          <u>NoSQL Databases:</u>
          <ul>
            <li>
              Flexible Schema: NoSQL databases offer flexible schema designs,
              allowing for dynamic and unstructured data storage. Data can be
              stored as key-value pairs, documents, graphs, or columnar
              structures.
            </li>
            <li>
              Unstructured and Semi-Structured Data: They are suitable for
              handling unstructured and semi-structured data like social media
              posts, sensor data, and user-generated content.
            </li>
            <li>
              Horizontal Scalability: NoSQL databases excel at horizontal
              scalability, allowing them to handle large volumes of data and
              high traffic loads by distributing data across multiple servers.
            </li>
            <li>
              Eventual Consistency: NoSQL databases often prioritize eventual
              consistency, sacrificing immediate consistency for high
              availability and performance.
            </li>
            <li>
              Querying: NoSQL databases provide various query languages and
              mechanisms specific to their data models, such as document query
              languages, graph traversal languages, or key-value access methods.
            </li>
          </ul>
        </div>
      </div>
      {/* 4th QA */}
      <div className="card mx-10 bg-fuchsia-400 mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS?</h2>
          <p>
            Express.js is a minimalistic and flexible web application framework
            for Node.js. It provides a simple and robust set of features for
            building web applications and APIs. Express.js offers a lightweight
            middleware system, routing capabilities, and a range of HTTP utility
            methods, making it a popular choice for building server-side
            applications with Node.js.
          </p>
          <p>
            Nest.js is a progressive, extensible, and TypeScript-based framework
            for building scalable and maintainable server-side applications. It
            is built on top of Express.js and provides additional features and
            architectural patterns inspired by Angular. Nest.js leverages
            decorators, dependency injection, modules, and a powerful CLI to
            facilitate the development of modular and structured applications.
            It aims to bring the benefits of Angular's architecture to
            server-side development with Node.js.
          </p>
        </div>
      </div>
      {/* 5th QA */}
      <div className="card mx-10 bg-fuchsia-400 mx-auto bg-base-100 shadow-xl mb-10">
        <div className="card-body">
          <h2 className="card-title">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            In MongoDB, the aggregate function is a powerful tool for performing
            advanced data processing and analysis operations on collections. It
            allows us to process data records and transform them using various
            aggregation pipelines.
          </p>
          <p>
            The aggregate function works by combining multiple stages in a
            pipeline to process the documents. Each stage performs a specific
            operation on the input documents and passes the results to the next
            stage in the pipeline.
          </p>
          <p>
            The stages in an aggregate pipeline can include operations like
            filtering, grouping, sorting, projecting, joining, and performing
            mathematical calculations. We can use a wide range of operators and
            functions provided by MongoDB to shape and manipulate the data as
            needed.
          </p>
          <p>
            By using the aggregate function, we can perform complex data
            operations, such as grouping data based on specific fields,
            calculating aggregations like sums or averages, and performing data
            transformations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;