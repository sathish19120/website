
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sathish19120/website.git'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Check if site.html exists in the destination
                    def targetPath = '/var/www/html/site.html'
                    
                    sh """
                    if [ ! -f ${targetPath} ]; then
                        echo "site.html not found in ${targetPath}. Copying the file..."
                        cp site.html /var/www/html/
                    else
                        echo "site.html already exists in ${targetPath}. Skipping copy."
                    fi
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
