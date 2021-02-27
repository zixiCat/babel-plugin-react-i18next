// import i18next from "i18next";
exports.createImportI18next = (t) => {
  const specifiersI18next = t.importDefaultSpecifier(t.identifier('i18next'));
  const sourceI18next = t.stringLiteral('i18next');
  const importI18next = t.importDeclaration([specifiersI18next], sourceI18next);
  return importI18next;
};

// import {Trans} from "react-i18next";
exports.createImportTrans = (t) => {
  const specifiersTrans = t.importSpecifier(
    t.identifier('Trans'),
    t.identifier('Trans')
  );
  const sourceTrans = t.stringLiteral('react-i18next');
  const importTrans = t.importDeclaration([specifiersTrans], sourceTrans);
  return importTrans;
};

// <Trans>...</Trans>
exports.createTransEle = (t, children) => {
  const OpeningElement = t.jsxOpeningElement(
    t.jsxIdentifier('Trans'),
    [],
    false
  );
  const ClosingElement = t.jsxClosingElement(t.jsxIdentifier('Trans'));
  return t.jsxElement(OpeningElement, ClosingElement, children, false);
};

// i18next.t()
exports.createTranslateFn = (t, strNode) => {
  const ME = t.memberExpression(t.identifier('i18next'), t.identifier('t'));
  return t.callExpression(ME, [strNode]);
};

const jsxExpressionContainertype = {
  StringLiteral(t, expression) {
    if (expression.value) {
      // it may need to be changed into function-like
      expression = createTranslateFn(t, expression);
    }
  },
  LogicalExpression(t, expression) {},
  ConditionalExpression(t, expression) {
    if (expression.consequent.type == 'StringLiteral') {
      expression.alternate.replaceWith(
        createTranslateFn(t, t.stringLiteral(expression.consequent.value))
      );
    } else if (expression.alternate.type == 'StringLiteral') {
      expression.alternate.replaceWith(
        createTranslateFn(t, t.stringLiteral(expression.consequent.value))
      );
    }
  },
};

exports.expressionReplaceWith = (t, expression) => {
  jsxExpressionContainertype[expression.type](t, expression);
};
// module.exports = { expressionReplaceWith };
