// https://gstreamer.freedesktop.org/documentation/plugin-development/appendix/licensing-advisory.html
export class License {

  constructor(name: string, description: string, url: string) {
    this.name = name;
    this.description = description;
    this.url = url;
  }

  static readonly LICENSES: License[] = [
    new License('LGPL', 'GNU Lesser General Public License', 'https://choosealicense.com/licenses/lgpl-3.0/'),
    new License('NONE', 'No Permissions', 'https://choosealicense.com/no-permission/'),
  ];

  readonly name: string;
  readonly description: string;
  readonly url: string;

  static byName(name: string): License {
    return License.LICENSES.find(llicense => llicense.name === name);
  }

  static fromJson(license: any) {
    if (license && license.name) {
      return this.byName(license.name);
    }
    return this.byName(license);
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }
}
