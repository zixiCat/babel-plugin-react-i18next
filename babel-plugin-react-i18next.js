module.exports = function ({ types: t }) {
  // import {Trans} from "react-i18next";
  const specifiersTrans = t.importSpecifier(
    t.identifier('Trans'),
    t.identifier('Trans')
  );
  const sourceTrans = t.stringLiteral('react-i18next');
  const importTrans = t.importDeclaration([specifiersTrans], sourceTrans);

  // import i18next from "i18next";
  const specifiersI18next = t.importDefaultSpecifier(t.identifier('i18next'));
  const sourceI18next = t.stringLiteral('i18next');
  const importI18next = t.importDeclaration([specifiersI18next], sourceI18next);

  // t function of i18next
  const translateFn = (strNode) => {
    const ME = t.memberExpression(t.identifier('i18next'), t.identifier('t'));
    return t.callExpression(ME, [strNode]);
  };

  // create Trans element
  const transEle = (children) => {
    const OpeningElement = t.jsxOpeningElement(
      t.jsxIdentifier('Trans'),
      [],
      false
    );
    const ClosingElement = t.jsxClosingElement(t.jsxIdentifier('Trans'));
    return t.jsxElement(OpeningElement, ClosingElement, children, false);
  };

  const hasTransPartImported = (specifiers) => {
    return (
      specifiers.findIndex(
        (innerItem) =>
          (innerItem && innerItem.imported && innerItem.imported.name) ===
          'Trans'
      ) > -1
    );
  };
  const hasTransImported = (path) => {
    return (
      path.node.body.findIndex(
        (item) =>
          (item.source && item.source.value) === 'react-i18next' &&
          hasTransPartImported(item.specifiers)
      ) > -1
    );
  };

  const hasI18nextImported = (path) => {
    return path.node.body.find(
      (item) => (item.source && item.source.value) === 'i18next'
    );
  };

  const has2LvRelationship = (path) => {
    return (
      path.node.children.findIndex(
        (item) =>
          item.type === 'JSXElement' &&
          item.children.findIndex((innerItem) => {
            return innerItem.type === 'JSXElement';
          }) === -1
      ) > -1 && path.node.openingElement.name.name !== 'Trans'
    );
  };

  return {
    visitor: {
      Program(path) {
        if (!hasTransImported(path)) {
          path.node.body.unshift(importTrans);
        }
        if (!hasI18nextImported(path)) {
          path.node.body.unshift(importI18next);
        }
      },
      JSXText(path, state) {
        if (state.opts.JSXText !== false) {
          const text = path.node.value.trim();
          if (text) {
            path.replaceWith(
              t.jsxExpressionContainer(translateFn(t.stringLiteral(text)))
            );
          }
        }
      },
      JSXExpressionContainer(path, state) {
        if (state.opts.JSXExpressionContainer !== false) {
          if (
            path.node.expression.type === 'StringLiteral' &&
            path.node.expression.value
          ) {
            path.node.expression = translateFn(path.node.expression);
          } else if (path.node.expression.type === 'ConditionalExpression') {
            // const expre
          }
        }
      },
      // JSXElement(path, state) {
      //   if (state.opts.JSXElement !== false) {
      //     if (has2LvRelationship(path)) {
      //       path.node.children = [transEle(path.node.children)];
      //     }
      //   }
      // },
      // JSXAttribute(path, state) {
      //   if (state.opts.JSXAttribute !== false) {
      //     if (
      //       path.node.value.type === 'StringLiteral' &&
      //       path.node.name.name !== 'className'
      //     ) {
      //       path.node.value = t.jsxExpressionContainer(
      //         translateFn(path.node.value)
      //       );
      //     }
      //   }
      // },
    },
  };
};
