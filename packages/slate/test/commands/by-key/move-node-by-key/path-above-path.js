/** @jsx h */

import h from '../../../helpers/h'


export default function(editor) {
  editor.moveNodeByKey('start', 'end', 1);
}


export const input = (
  <value>
    <document>
      <list key="end">
        <item>1</item>
        <list>
          <item>2</item>
          <list>
            <item >3</item>
            <list >
              <item>4</item>
              <list key="start">
                <item>5</item>
              </list>
            </list>
          </list>
        </list>
      </list>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <list key="end">
        <item>1</item>
        <list key="start">
          <item>5</item>
        </list>
        <list>
          <item>2</item>
          <list>
            <item >3</item>
            <list >
              <item>4</item>
            </list>
          </list>
        </list>
      </list>
    </document>
  </value>
)