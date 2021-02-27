// exports.hasTransPartImported = (specifiers) => {
//   return (
//     specifiers.findIndex(
//       (innerItem) =>
//         (innerItem && innerItem.imported && innerItem.imported.name) === 'Trans'
//     ) > -1
//   );
// };

// exports.has2LvRelationship = (path) => {
//   return (
//     path.node.children.findIndex(
//       (item) =>
//         item.type === 'JSXElement' &&
//         item.children.findIndex((innerItem) => {
//           return innerItem.type === 'JSXElement';
//         }) === -1
//     ) > -1 && path.node.openingElement.name.name !== 'Trans'
//   );
// };

// exports.hasTransImported = (path) => {
//   return (
//     path.node.body.findIndex(
//       (item) =>
//         (item.source && item.source.value) === 'react-i18next' &&
//         exports.hasTransPartImported(item.specifiers)
//     ) > -1
//   );
// };

// exports.hasI18nextImported = (path) => {
//   return path.node.body.find(
//     (item) => (item.source && item.source.value) === 'i18next'
//   );
// };

export default 1;
