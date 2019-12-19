// import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { Rule, SchematicContext, Tree, } from '@angular-devkit/schematics'
import { Schema } from './schema';
// import { strings } from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    console.log('started')
    // const { name } = _options;
    // tree.create('hello.js', `console.log('hello${name}')`)
    // return tree;
    var jso = {
      "response":
        [
          {
            "element": "div",
            "id": "james",
            "children":
              [
                {
                  "element": "h1",
                  "id": "bob",
                  "innerHTML": "bobs content",
                },
                {
                  "element": "h2",
                  "id": "rob",
                  "innerHTML": "robs content",
                },
                {
                  "element": "p",
                  "innerHTML": "some random text",
                },
              ],
          },
          {
            "element": "div",
            "id": "alex",
            "innerHTML": "this is a test message in a div box",
          },
        ]
    }
    const { name } = _options;
    let parent = document.createElement('div');
    createElementsFromJSON(jso.response, parent);
    console.log(parent)
    _tree.create(`${name}.html`, `${parent}`)

    return _tree;
    // const sourceTemplates = url('./files');
    // const sourceParameterizedTemplates = apply(sourceTemplates, [template({ ..._options, ...strings })])
    // return mergeWith(sourceParameterizedTemplates);
  };
  function createElementsFromJSON(json: any, parent: any) {
    for (var i in json) {
      var object = json[i];

      var obj = document.createElement(object.element);

      for (var tag in object)
        if (tag != "children" && tag != "element")
          obj.setAttribute(tag, object[tag]);
      parent.appendChild(obj);

      if (typeof (object.children) == "object")
        createElementsFromJSON(object.children, obj);
    }
  }
}
