#!groovy

node {
    env.NODEJS_HOME = "${tool 'Node 8.9.4'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    sh 'npm --version'

    stage('Test') {
        env.NODEJS_HOME = "${tool node7}"
        env.PATH="${env.NODEJS_HOME}:${env.PATH}"
        echo ${env.PATH}
        sh 'node -version'
        sh 'npm test'
    }
}
