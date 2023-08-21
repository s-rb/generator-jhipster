export {
  JHIPSTER_DOCUMENTATION_URL,
  JHIPSTER_DOCUMENTATION_ARCHIVE_PATH,
  GENERATOR_JHIPSTER,
  JHIPSTER_CONFIG_DIR,
  NODE_VERSION as RECOMMENDED_NODE_VERSION,
  JAVA_VERSION as RECOMMENDED_JAVA_VERSION,
  JAVA_COMPATIBLE_VERSIONS,
  JHIPSTER_DEPENDENCIES_VERSION,
  SERVER_MAIN_SRC_DIR as JAVA_MAIN_SOURCES_DIR,
  SERVER_MAIN_RES_DIR as JAVA_MAIN_RESOURCES_DIR,
  SERVER_TEST_SRC_DIR as JAVA_TEST_SOURCES_DIR,
  SERVER_TEST_RES_DIR as JAVA_SERVER_TEST_RESOURCES_DIR,
  CLIENT_MAIN_SRC_DIR as JAVA_WEBAPP_SOURCES_DIR,
  CLIENT_TEST_SRC_DIR as JAVA_JAVASCRIPT_TEST_DIR,
  DOCKER_DIR as JAVA_DOCKER_DIR,
  SERVER_MAIN_SRC_DIR as TEMPLATES_MAIN_SOURCES_DIR,
  SERVER_MAIN_RES_DIR as TEMPLATES_MAIN_RESOURCES_DIR,
  SERVER_TEST_SRC_DIR as TEMPLATES_TEST_SOURCES_DIR,
  SERVER_TEST_RES_DIR as TEMPLATES_SERVER_TEST_RESOURCES_DIR,
  CLIENT_MAIN_SRC_DIR as TEMPLATES_WEBAPP_SOURCES_DIR,
  CLIENT_TEST_SRC_DIR as TEMPLATES_JAVASCRIPT_TEST_DIR,
  DOCKER_DIR as TEMPLATES_DOCKER_DIR,
} from './generator-constants.mjs';

export { default as GeneratorBase } from './base/index.mjs';
export { default as CoreGeneratorBaseCore } from './base-core/index.mjs';
export { default as GeneratorBaseApplication } from './base-application/index.mjs';
