// const test = require('./modules/conditionalLogic');
import test from './modules/conditionalLogic';
console.log(test, 'test');

// const test1 = require('./modules/operateCode');
// const { hasI18nextImported, hasTransImported } = test;
// const {
//   createImportTrans,
//   createTranslateFn,
//   createImportI18next,
//   expressionReplaceWith,
//   a,
// } = test1;

// console.log(a, 'a');

// module.exports = function ({ types: t }) {
//   const importTrans = createImportTrans(t);
//   const importI18next = createImportI18next(t);

//   return {
//     visitor: {
//       Program(path) {
//         if (!hasTransImported(path)) {
//           path.node.body.unshift(importTrans);
//         }
//         if (!hasI18nextImported(path)) {
//           path.node.body.unshift(importI18next);
//         }
//       },
//       JSXText(path, state) {
//         if (state.opts.JSXText !== false) {
//           const text = path.node.value.trim();
//           if (text) {
//             path.replaceWith(
//               t.jsxExpressionContainer(
//                 createTranslateFn(t, t.stringLiteral(text))
//               )
//             );
//           }
//         }
//       },
//       JSXExpressionContainer(path, state) {
//         if (state.opts.JSXExpressionContainer !== false) {
//           expressionReplaceWith(t, path.node.expression);
//         }
//       },
//       // JSXElement(path, state) {
//       //   if (state.opts.JSXElement !== false) {
//       //     if (has2LvRelationship(path)) {
//       //       path.node.children = [createTransEle(t, path.node.children)];
//       //     }
//       //   }
//       // },
//       // JSXAttribute(path, state) {
//       //   if (state.opts.JSXAttribute !== false) {
//       //     if (
//       //       path.node.value.type === 'StringLiteral' &&
//       //       path.node.name.name !== 'className'
//       //     ) {
//       //       path.node.value = t.jsxExpressionContainer(
//       //         createTranslateFn(t, path.node.value)
//       //       );
//       //     }
//       //   }
//       // },
//     },
//   };
// };
