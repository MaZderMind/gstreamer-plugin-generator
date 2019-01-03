// https://gstreamer.freedesktop.org/documentation/plugin-development/appendix/licensing-advisory.html
export class License {
  static readonly LICENSES: License[] = [
    new License('LGPL', 'GNU Lesser General Public License', 'https://choosealicense.com/licenses/lgpl-3.0/'),
    new License('NONE', 'No Permissions', 'https://choosealicense.com/no-permission/'),
  ];

  readonly name: string;
  readonly description: string;
  readonly url: string;

  constructor(name: string, description: string, url: string) {
    this.name = name;
    this.description = description;
    this.url = url;
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }

  static byName(name: any): License {
    return License.LICENSES.find(llicense => llicense.name == name);
  }
}
