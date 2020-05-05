/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

pimcore.registerNS("pimcore.asset.metadata.data.textarea");
pimcore.asset.metadata.data.textarea = Class.create(pimcore.asset.metadata.data.data, {

    type: "textarea",


    initialize: function (treeNode, initData) {
        this.type = "textarea";

        this.initData(initData);

        this.treeNode = treeNode;
    },

    getTypeName: function () {
        return t("textarea");
    },

    getIconClass: function () {
        return "pimcore_icon_textarea";
    }
});