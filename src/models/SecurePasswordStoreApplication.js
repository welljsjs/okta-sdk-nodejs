/*!
 * Copyright (c) 2017-2020, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

var Application = require('./Application');
const SchemeApplicationCredentials = require('./SchemeApplicationCredentials');
const SecurePasswordStoreApplicationSettings = require('./SecurePasswordStoreApplicationSettings');

/**
 * @class SecurePasswordStoreApplication
 * @extends Application
 * @property { SchemeApplicationCredentials } credentials
 * @property { object } name
 * @property { SecurePasswordStoreApplicationSettings } settings
 */
class SecurePasswordStoreApplication extends Application {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.credentials) {
      this.credentials = new SchemeApplicationCredentials(resourceJson.credentials);
    }
    if (resourceJson && resourceJson.settings) {
      this.settings = new SecurePasswordStoreApplicationSettings(resourceJson.settings);
    }
  }

}

module.exports = SecurePasswordStoreApplication;
