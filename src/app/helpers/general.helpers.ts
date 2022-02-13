import { HashMap } from '../models';

export class GeneralHelpers {
  static snakeCaseToCamelCase(obj: any): unknown {
    if (this.isObject(obj)) {
      const n: HashMap = {};

      Object.keys(obj).forEach(k => {
        n[toCamel(k)] = this.snakeCaseToCamelCase(obj[k]);
      });

      return n;
    } else if (Array.isArray(obj)) {
      return obj.map(i => this.snakeCaseToCamelCase(i));
    }

    return obj;
  }

  static isObject(obj: any): boolean {
    return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';
  }
}

const toCamel = (s: any) => {
  let field =
    s
      .replace(/([-_][a-z])/gi, (chr: string) => {
        return chr.toUpperCase();
      })
      .replace(/[-_]/gi, '') || '';
  field = `${field[0].toLowerCase()}${field.slice(1)}`;
  return field;
};
