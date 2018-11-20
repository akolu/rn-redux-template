/**
 * Lets you dispatch special actions with a { promise } field.
 * Slightly modified from http://redux.js.org/docs/advanced/Middleware.html.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
export const readyStatePromise = store => next => action => {
    if (!action.promise) {
        return next(action);
    }

    function makeAction(status, data) {
        let newAction = Object.assign({}, action, {status: status}, data);
        delete newAction.promise;
        return newAction;
    }

    next(makeAction(results.ASYNC_RESULT_PENDING));
    return action.promise.then(
        result => next(makeAction(results.ASYNC_RESULT_SUCCESS, {result})),
        error => next(makeAction(results.ASYNC_RESULT_ERROR, {error}))
    );
};

export const results = Object.freeze({
    ASYNC_RESULT_NONE: 'ASYNC_RESULT_NONE',
    ASYNC_RESULT_PENDING: 'ASYNC_RESULT_PENDING',
    ASYNC_RESULT_SUCCESS: 'ASYNC_RESULT_SUCCESS',
    ASYNC_RESULT_ERROR: 'ASYNC_RESULT_ERROR',
});