import { helper } from '@ember/component/helper';

export function bookmarkTitle([title, about]/*, hash*/) {
  return about === null ? title : `${title} - ${about}`;
}

export default helper(bookmarkTitle);
