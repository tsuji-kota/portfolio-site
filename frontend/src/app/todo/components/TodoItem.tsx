// 必要なライブラリをインポート
import React from 'react';

const TodoItem = (props: { task: string; toggleCompletion: () => void; }) => { // ←注意ポイント④
    return (
        <div className="flex justify-between p-2 border-b bg-white mb-5">
            {/* タスクテキストを表示 */}
            <span className="flex-1">{props.task}</span>
            {/* toggleCompletion関数をトリガーするボタン */}
            <button onClick={props.toggleCompletion} className="text-xl">
                ✓
            </button>
        </div>
    );
};

export default TodoItem;
