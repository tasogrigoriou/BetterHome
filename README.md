# CSC 648/848 Software Engineering Spring 2019 Project - Team 3

Our team created a product entitled "BetterHome" that is a property marketplace dedicated to providing users with the services they need to buy, sell, or rent the place they call home. Users will be able to browse the various property listings on the website, and use our detailed search and filter functions such as laundry and wheelchair access, and hospital / BART proximity in order to find the exact home they are looking for.

The project is deployed on Google Cloud Platform and can be viewed using this link:   
https://better-home-234220.appspot.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Install Node.js v10.15.3:  
https://nodejs.org/en/download/

2. Download the Google Cloud SQL Proxy:  
https://dl.google.com/cloudsql/cloud_sql_proxy.darwin.amd64

3. If using Linux/MacOS, make the proxy executable: 
```
chmod +x cloud_sql_proxy
```

4. Download the credential file used to authenticate your proxy:
```
https://drive.google.com/file/d/1KsNDEAZ2DExlS8S8S-eYD_473oWCTcup/view?usp=sharing
```

5. Put both the cloud_sql_proxy and the credential file under the same directory, then start the proxy and leave it running using this command:
```
./cloud_sql_proxy -instances=better-home-234220:us-west2:better-home-db=tcp:3306 \
                  -credential_file=better-home-234220-a7f390d12278.json &
```

### Local Environment

1. Clone the project either with HTTPS or SSH.

2. Navigate to , and install the dependencies for the project:
```
npm install
```

3. Start the local server:
```
npm start
```

4. Navigate in your browser to this link:  
http://localhost:3000

5. You're good to go!

## Authors

* **Anastasios Grigoriou** - *Team Lead* - [tasogrigoriou](https://github.com/tasogrigoriou)
